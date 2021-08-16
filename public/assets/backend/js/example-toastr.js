window.onload = function() {

    Toast = function(msg, ttype, opt) {
        var ttype = ttype ? ttype : "info",
            msi = "",
            ticon =
                ttype === "info" ? "ni ni-info-fill"
                    : ttype === "success" ? "ni ni-check-circle-fill"
                    : ttype === "error" ? "ni ni-cross-circle-fill"
                    : ttype === "warning" ? "ni ni-alert-fill"
                    : "",
            def = {
                position: "bottom-right",
                ui: "",
                icon: "auto",
                clear: false
            },
            attr = opt ? extend(def, opt) : def;
        attr.position = attr.position ? "toast-" + attr.position
            : "toast-bottom-right";
        attr.icon = attr.icon === "auto" ? ticon : attr.icon ? attr.icon : "";
        attr.ui = attr.ui ? " " + attr.ui : "";
        (msi =
            attr.icon !== "" ? '<span class="toastr-icon"><em class="icon ' +
                  attr.icon +
                  '"></em></span>'
                : ""),
            (msg =  msg !== ""  ? msi + '<div class="toastr-text">' + msg + "</div>"  : "" );

        if (msg !== "") {
            if (attr.clear === true) {
                toastr.clear();
            }

            var option = {
                closeButton: true,
                debug: false,
                newestOnTop: false,
                progressBar: false,
                positionClass: attr.position + attr.ui,
                closeHtml: '<span class="btn-trigger">Close</span>',
                preventDuplicates: true,
                showDuration: "1500",
                hideDuration: "1500",
                timeOut: "2000",
                toastClass: "toastr",
                extendedTimeOut: "3000"
            };
            toastr.options = extend(option, attr);
            toastr[ttype](msg);
        }
    };
  $('.eg-toastr-default').on("click", function (e) {
    e.preventDefault();
    toastr.clear();
    Toast('This is a note for deafult toast message.', 'info');
  });
  $('.eg-toastr-bottom-center').on("click", function (e) {
    e.preventDefault();
    toastr.clear();
    Toast('This is a note for bottom center toast message.', 'info', {
      position: 'bottom-center'
    });
  });
  $('.eg-toastr-bottom-right').on("click", function (e) {
    e.preventDefault();
    toastr.clear();
    Toast('This is a note for bottom right toast message.', 'info');
  });
  $('.eg-toastr-bottom-left').on("click", function (e) {
    e.preventDefault();
    toastr.clear();
    Toast('This is a note for bottom left toast message.', 'info', {
      position: 'bottom-left'
    });
  });
  $('.eg-toastr-bottom-full').on("click", function (e) {
    e.preventDefault();
    toastr.clear();
    Toast('This is a note for bottom full width toast message.', 'info', {
      position: 'bottom-full'
    });
  });
  $('.eg-toastr-top-center').on("click", function (e) {
    e.preventDefault();
    toastr.clear();
    Toast('This is a note for top center toast message.', 'info', {
      position: 'top-center'
    });
  });
  $('.eg-toastr-top-right').on("click", function (e) {
    e.preventDefault();
    toastr.clear();
    Toast('This is a note for top right toast message.', 'info', {
      position: 'top-right'
    });
  });
  $('.eg-toastr-top-left').on("click", function (e) {
    e.preventDefault();
    toastr.clear();
    Toast('This is a note for top left toast message.', 'info', {
      position: 'top-left'
    });
  });
  $('.eg-toastr-top-full').on("click", function (e) {
    e.preventDefault();
    toastr.clear();
    Toast('This is a note for top full width toast message.', 'info', {
      position: 'top-full'
    });
  });
  $('.eg-toastr-info').on("click", function (e) {
    e.preventDefault();
    toastr.clear();
    Toast('This is a note for bottom right toast message.', 'info');
  });
  $('.eg-toastr-success').on("click", function (e) {
    e.preventDefault();
    toastr.clear();
    Toast('This is a note for success toast message.', 'success');
  });
  $('.eg-toastr-warning').on("click", function (e) {
    e.preventDefault();
    toastr.clear();
    Toast('This is a note for warning toast message.', 'warning');
  });
  $('.eg-toastr-error').on("click", function (e) {
    e.preventDefault();
    toastr.clear();
    Toast('This is a note for error toast message.', 'error');
  });
  $('.eg-toastr-dark').on("click", function (e) {
    e.preventDefault();
    toastr.clear();
    Toast('This is dark version note of toast message.', 'info', {
      ui: 'is-dark'
    });
  });
  $('.eg-toastr-no-icon').on("click", function (e) {
    e.preventDefault();
    toastr.clear();
    Toast('This is without icon note of toast message.', 'info', {
      icon: false
    });
  });
  $('.eg-toastr-with-title').on("click", function (e) {
    e.preventDefault();
    toastr.clear();
    Toast('<h5>Update Successfully</h5><p>Your profile has been successfully updated.</p>', 'success');
  });

};
