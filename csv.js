


/*

CSV 1.0.2 - 27 october 2007 - http://www.sullof.com

Copyright (c) 2007 Francesco Sullo
Dual licensed under the MIT (MIT-LICENSE.txt) 
and GPL (GPL-LICENSE.txt) licenses.

*/


CSV = {

	version: '1.0.2',
	verdate: '27 october 2007',

	separator: ",",
	delimitator: '"',

	toArray: function (x,s,d) {
		var sep = s ? s : this.separator,
			del = d ? d : this.delimitator,
			ret = [], l = -1, last = '',
			c, p, str = "",
			xx = x?x.replace(/[\0\v\f\r\xa0]/g,""):'',
			f, bn=1, fp, av, j=0;
		while (j<xx.length) {
			if (fp) {
				ret[l].push(str);	
				str = "";
				fp=0;
				av=0;
				f=0;
			}
			if (bn) {
				l++;
				ret[l] = [];
				bn=0;
			}
			c = xx.substring(j,j+1);
			p = xx.substring(j+1,j+2);
			if (!str && !av) {
				if (c == sep) {
					fp=1;
					j++;
					continue;
				}
				f = c == del ? 1 : 0;
				av=1;
				if (f) {
					j++;
					continue;
				}
			}
			if (c == del) {
				if (p == c) {
					str += c;
					j+=2;
					continue;
				}
				else {
					f = 0;
					j++;
					continue;
				}
			}
			if (c == sep && !f) {
				fp=1;
				j++;
				continue;
			}
			if (c == "\n" && !f) {
				fp=1;
				bn=1;
				j++;
				continue;
			}
			str += c;
			j++;
		}
		if (str) ret[l].push(str);
		return ret;
	},
	
	setfield: function (f,s,d) {
		var sep = s ? s : this.separator;
		if (!f) return "";
		var re = new RegExp(sep,"g");
		var del = /(^\s|\s$|\n|")/.test(f)  || re.test(f) ? (d ? d : '"') : '';
		f = f.replace(/"/g,'""');
		return del+f+del;
	},
	
	fromArray: function (x,s,d) {
		var sep = s ? s : this.separator,
			del = d ? d : this.delimitator,
			str = "";
		for (var j=0;j<x.length;j++) {
			str += j ? "\n" : "";
			for (var k=0;k<x[j].length;k++) str += (k?sep:'') + this.setfield(x[j][k],sep,del);
		}
		return str;
	}
}; 
