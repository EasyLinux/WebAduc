<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit3b9b594a30178fb5b0c6f1e37099a909
{
    public static $files = array (
        '5255c38a0faeba867671b61dfda6d864' => __DIR__ . '/..' . '/paragonie/random_compat/lib/random.php',
        '72579e7bd17821bb1321b87411366eae' => __DIR__ . '/..' . '/illuminate/support/helpers.php',
    );

    public static $prefixLengthsPsr4 = array (
        'I' => 
        array (
            'Illuminate\\Support\\' => 19,
            'Illuminate\\Contracts\\' => 21,
        ),
        'A' => 
        array (
            'Adldap\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Illuminate\\Support\\' => 
        array (
            0 => __DIR__ . '/..' . '/illuminate/support',
        ),
        'Illuminate\\Contracts\\' => 
        array (
            0 => __DIR__ . '/..' . '/illuminate/contracts',
        ),
        'Adldap\\' => 
        array (
            0 => __DIR__ . '/..' . '/adldap2/adldap2/src',
        ),
    );

    public static $prefixesPsr0 = array (
        'T' => 
        array (
            'Twig_' => 
            array (
                0 => __DIR__ . '/..' . '/twig/twig/lib',
            ),
        ),
        'D' => 
        array (
            'Doctrine\\Common\\Inflector\\' => 
            array (
                0 => __DIR__ . '/..' . '/doctrine/inflector/lib',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit3b9b594a30178fb5b0c6f1e37099a909::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit3b9b594a30178fb5b0c6f1e37099a909::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit3b9b594a30178fb5b0c6f1e37099a909::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}
