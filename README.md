# Manage School's Yearbook Online

This package allows you to manage school's yearbook online.
Every school will have to create one account to manage and view the yearbook.
Account creation will be managed by an administrator.


## Server Installation

### Requirements

* php 7.2 (or later)
* composer


### Installation

Clone the repository:

```sh
$ git clone git@github.com:ohchiko/eterno
```


or

```sh
$ git clone https://github.com/ohchiko/eterno
```


or download the repository by clicking the download button at the upper right of the page, then extract to your projects folder.


Once downloaded, configure your `.env` file by copying the `.env.example` file:

```sh
$ cp .env.example .env
```


then configure the `.env` file as your server configuration.


Install the package's dependencies using `composer`:

```sh
$ composer install
```


Generate the application key (will turned error if none exists):

```sh
php artisan key:generate
```


Setup your database, then migrate the table from the package:

```sh
$ php artisan migrate
```


Next, you may need to create an administrator account. To do so, enter:

```sh
$ php artisan make:admin
```


You'll be asked to fill the data for the administrator and confirmation to create one.


Once done, the application is ready to use.


## Support

If you ever experienced any troubles during the installation, feel free to contact me by email at [chiko150@outlook.com](mailto:chiko150@outlook.com)!

If you find any kind of bugs or errors while using the application, don't hesitate to submit an issue to the package, or even a PR.

## License

The MIT License (MIT). Please see [LICENSE file](LICENSE) for more information.
