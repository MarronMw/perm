<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;


class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        //Add some permissions
        Permission::create(['name'=>'edit articles']);
        Permission::create(['name'=>'delete articles']);
        Permission::create(['name'=>'publish articles']);

        //Add and assign permissions to admin role
        $adminRole=Role::create(['name'=>'admin']);
        $adminRole->syncPermissions(Permission::all());
        
        //Add and assign permissions to admin role
        $editorRole=Role::create(['name'=>'editor']);
        $editorRole->givePermissionTo('edit articles');

        //Asign em to a user
        $user=User::find(7);//since the first user has an id of 6
        $user->assignRole('admin');
    }
}
