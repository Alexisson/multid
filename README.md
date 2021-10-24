## 24/10/2021

## v2.0.0

## MAJOR UPDATE

CHANGE LOG:

1. No more arguments are required to work. By default, it will return an identifier that is 16 characters long and includes uppercase and lowercase letters and numbers.
2. Changed parameter keys to use uppercase and lowercase. The "little" key has been changed to "lower", the "capital" key to "upper". At the same time, the logic of the parameters has not changed.

===================================================================================================================

## 16/10/2021

## v1.0.2

You need at least 1 argument (identifier length) to use the function. The second argument by default passes options for the identifier:

1. little: (default is true), the identifier will include lowercase characters.
2. capital: (default is false), the identifier will include uppercase characters.
3. numbers: (default is false), the identifier will include numbers.

The function returns an identifier with the length specified in the first argument and options, if specified. If no options are specified, the identifier with the length specified in the first argument and in uppercase will be returned.
