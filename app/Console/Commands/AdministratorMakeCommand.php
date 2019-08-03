<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class AdministratorMakeCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:admin';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new administrator account.';

    protected $name,
        $email,
        $password;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->name = $this->ask('Administrator\'s name (min: 3)');
        $this->email = $this->ask('Administrator\'s email');
        $this->password = $this->secret('Administrator\'s password (min: 6)');

        if ($this->confirm('Confirm creating the administrator?')) {
            $validator = Validator::make([
                'name' => $this->name,
                'email' => $this->email,
                'password' => $this->password
            ], [
                'name' => 'required|string|min:3',
                'email' => 'required|string|email|unique:users',
                'password' => 'required|string|min:6'
            ]);

            if ($validator->fails()) {
                $this->error('Input given is not valid');
            } else {
                $progressBar = $this->output->createProgressBar(1);
                $progressBar->start();

                $user = User::create([
                    'name' => $this->name,
                    'email' => $this->email,
                    'password' => Hash::make($this->password),
                    'api_token' => Str::random(60)
                ]);

                $user->promoteAdmin();
                $user->assignRole('admin');

                $progressBar->finish();
                $this->info("\n\nAn administrator account was created.");
            }
        }
    }
}
