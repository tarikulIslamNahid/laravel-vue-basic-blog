<?php

use App\Permission;
use App\roles;
use Illuminate\Database\Seeder;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roleAdmin = roles::create(['name' => 'admin']);
        $roleSuperAdmin = roles::create(['name' => 'superadmin']);
        $roleEditor = roles::create(['name' => 'editor']);
        $roleUser = roles::create(['name' => 'user']);


        // Permissions List
        $permissions = [


            //Blog permissions
            [
                'group_name' => 'blog',
                'permissions' => [
                    'blog.create',
                    'blog.view',
                    'blog.edit',
                    'blog.delete',
                    'blog.approve',

                ]
            ],


            //Admin permissions
            [
                'group_name' => 'admin',
                'permissions' => [
                    'admin.create',
                    'admin.view',
                    'admin.edit',
                    'admin.delete',
                    'admin.approve',
                ]
            ],


            //roles permissions
            [
                'group_name' => 'roles',
                'permissions' => [
                    'roles.create',
                    'roles.view',
                    'roles.edit',
                    'roles.delete',
                    'roles.approve',
                ]
            ],


            //profile permissions
            [
                'group_name' => 'profile',
                'permissions' => [
                    'profile.view',
                    'profile.edit',
                ]
            ],

        ];

        // create and assigned permissions
        for ($i = 0; $i < count($permissions); $i++) {
            $groupPermissions = $permissions[$i]['group_name'];
            for ($j = 0; $j < count($permissions[$i]['permissions']); $j++) {
                //create permissions
                $permission = Permission::create([
                    'name' => $permissions[$i]['permissions'][$j],
                    'group_name' => $groupPermissions,
                ]);

                // $roleSuperAdmin->givePermissionTo($permission);
                // $permission->assignRole($roleSuperAdmin);
            }
        }
    }
}