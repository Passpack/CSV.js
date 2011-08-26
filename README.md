CSV
===

It is a simple Javascript library to convert arrays in CSV text files and vice versa.

## Howto

To convert the array `report` in a CSV file using the ";" as separator and quotes as delimitator launch the following command:

	CSV.toArray(report,';','"');
	
Separator and delimitator are optional, the default are commas and quotes.
Vice versa, to convert the string `csvstr` in an array, launch:	

	CSV.from Array(csvstr);
	
where separator and delimitator are the standard ones.
If you need to format a specific field, you can use the method `setfield`.	
	
## Credits

(c) 2007 Francesco Sullo, Passpack SRL <francesco@passpack.com>

## License 

(The MIT License)

Copyright (c) 2010 Francesco Sullo, Passpack SRL <francesco@passpack.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
