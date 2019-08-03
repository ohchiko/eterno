<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'manage pdfs', 'guard_name' => 'api']);
        Permission::create(['name' => 'view pdfs', 'guard_name' => 'api']);
        Permission::create(['name' => 'manage users', 'guard_name' => 'api']);

        // create roles and assign created permissions

        $role = Role::create(['name' => 'school', 'guard_name' => 'api'])
            ->givePermissionTo(['manage pdfs', 'view pdfs']);

        $role = Role::create(['name' => 'visitor', 'guard_name' => 'api'])
            ->givePermissionTo('view pdfs');

        $role = Role::create(['name' => 'admin', 'guard_name' => 'api']);
        $role->givePermissionTo('manage users');
    }
}
