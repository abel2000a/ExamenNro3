<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Salon extends Model
{
    public $timestamps = false;
    protected $guarded = ["id"];
    protected $table = 'salon';
}
