var mime_samples = [
  { 'mime': 'application/javascript', 'samples': [
    { 'url': 'http://localhost:8000/static/account_adder.js/', 'dir': '_m0/0', 'linked': 2, 'len': 2025 } ]
  },
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:8000/', 'dir': '_m1/0', 'linked': 2, 'len': 446 },
    { 'url': 'http://localhost:8000/transfer/', 'dir': '_m1/1', 'linked': 2, 'len': 1122 },
    { 'url': 'http://localhost:8000/accounts/login/?next=/transfer/', 'dir': '_m1/2', 'linked': 2, 'len': 4007 },
    { 'url': 'http://localhost:8000/admin/login/', 'dir': '_m1/3', 'linked': 5, 'len': 1996 },
    { 'url': 'http://localhost:8000/admin/login/', 'dir': '_m1/4', 'linked': 5, 'len': 2129 },
    { 'url': 'http://localhost:8000/admin/password_reset/', 'dir': '_m1/5', 'linked': 5, 'len': 1730 },
    { 'url': 'http://localhost:8000/admin/password_reset/done/', 'dir': '_m1/6', 'linked': 2, 'len': 1387 },
    { 'url': 'http://localhost:8000/history/', 'dir': '_m1/7', 'linked': 5, 'len': 1921 },
    { 'url': 'http://localhost:8000/login/', 'dir': '_m1/8', 'linked': 5, 'len': 882 },
    { 'url': 'http://localhost:8000/login/', 'dir': '_m1/9', 'linked': 5, 'len': 1032 },
    { 'url': 'http://localhost:8000/logout/', 'dir': '_m1/10', 'linked': 2, 'len': 403 },
    { 'url': 'http://localhost:8000/register/', 'dir': '_m1/11', 'linked': 5, 'len': 3545 },
    { 'url': 'http://localhost:8000/register/', 'dir': '_m1/12', 'linked': 5, 'len': 3906 },
    { 'url': 'http://localhost:8000/static/', 'dir': '_m1/13', 'linked': 2, 'len': 1634 } ]
  },
  { 'mime': 'text/css', 'samples': [
    { 'url': 'http://localhost:8000/static/admin/css/base.css/', 'dir': '_m2/0', 'linked': 2, 'len': 16225 },
    { 'url': 'http://localhost:8000/static/admin/css/forms.css/', 'dir': '_m2/1', 'linked': 2, 'len': 8505 },
    { 'url': 'http://localhost:8000/static/admin/css/login.css/', 'dir': '_m2/2', 'linked': 2, 'len': 1203 },
    { 'url': 'http://localhost:8000/static/admin/css/responsive.css/', 'dir': '_m2/3', 'linked': 2, 'len': 17976 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://localhost:8000/static/admin/', 'dir': '_m3/0', 'linked': 2, 'len': 59 } ]
  }
];

var issue_samples = [
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost:8000/admin/password_reset/', 'extra': '', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://localhost:8000/history/?csrfmiddlewaretoken=LnjxjXiWeM2rcoWVmY2jUc7zreOjHSAQjUbrq7yecuXLXTFUg95w4I6wwy4keTCT', 'extra': '', 'sid': '0', 'dir': '_i0/1' },
    { 'url': 'http://localhost:8000/transfer/', 'extra': '', 'sid': '0', 'dir': '_i0/2' } ]
  },
  { 'severity': 1, 'type': 20205, 'samples': [
    { 'url': 'http://localhost:8000/history/', 'extra': '', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 1, 'type': 20102, 'samples': [
    { 'url': 'http://localhost:8000/accounts/login/?next=/history/%3Fcsrfmiddlewaretoken%3Dconfirmation', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://localhost:8000/history/sfish\x3e\x27\x3e\x22\x3e\x3csfish\x3e\x3c%2Fsfish\x3e', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://localhost:8000/register/', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/2' } ]
  },
  { 'severity': 1, 'type': 20101, 'samples': [
    { 'url': 'http://localhost:8000/accounts/login/?next=/history/%3Fcsrfmiddlewaretoken%3Ddl', 'extra': 'during try list fetches', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://localhost:8000/admin/top.js', 'extra': 'during path-based dictionary probes', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'http://localhost:8000/history/?csrfmiddlewaretoken=descending', 'extra': 'during parameter brute-force tests', 'sid': '0', 'dir': '_i3/2' },
    { 'url': 'http://localhost:8000/login/', 'extra': 'during try list fetches', 'sid': '0', 'dir': '_i3/3' },
    { 'url': 'http://localhost:8000/login/', 'extra': 'during parameter brute-force tests', 'sid': '0', 'dir': '_i3/4' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'http://localhost:8000/static/account_adder.js/', 'extra': '', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://localhost:8000/static/admin/', 'extra': '', 'sid': '0', 'dir': '_i4/1' },
    { 'url': 'http://localhost:8000/static/admin/css/', 'extra': '', 'sid': '0', 'dir': '_i4/2' },
    { 'url': 'http://localhost:8000/static/admin/css/base.css/', 'extra': '', 'sid': '0', 'dir': '_i4/3' },
    { 'url': 'http://localhost:8000/static/admin/css/forms.css/', 'extra': '', 'sid': '0', 'dir': '_i4/4' },
    { 'url': 'http://localhost:8000/static/admin/css/login.css/', 'extra': '', 'sid': '0', 'dir': '_i4/5' },
    { 'url': 'http://localhost:8000/static/admin/css/responsive.css/', 'extra': '', 'sid': '0', 'dir': '_i4/6' } ]
  },
  { 'severity': 0, 'type': 10802, 'samples': [
    { 'url': 'http://localhost:8000/static/admin/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://localhost:8000/static/admin/css/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i5/1' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://localhost:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://localhost:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i6/1' },
    { 'url': 'http://localhost:8000/login/', 'extra': '', 'sid': '0', 'dir': '_i6/2' },
    { 'url': 'http://localhost:8000/login/', 'extra': '', 'sid': '0', 'dir': '_i6/3' },
    { 'url': 'http://localhost:8000/login/', 'extra': '', 'sid': '0', 'dir': '_i6/4' },
    { 'url': 'http://localhost:8000/login/', 'extra': '', 'sid': '0', 'dir': '_i6/5' },
    { 'url': 'http://localhost:8000/register/', 'extra': '', 'sid': '0', 'dir': '_i6/6' },
    { 'url': 'http://localhost:8000/register/', 'extra': '', 'sid': '0', 'dir': '_i6/7' } ]
  },
  { 'severity': 0, 'type': 10505, 'samples': [
    { 'url': 'http://localhost:8000/transfer/', 'extra': 'amount', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'http://localhost:8000/transfer/', 'extra': 'account_number', 'sid': '0', 'dir': '_i7/1' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://localhost:8000/admin/logout/', 'extra': '', 'sid': '0', 'dir': '_i8/0' } ]
  },
  { 'severity': 0, 'type': 10403, 'samples': [
    { 'url': 'http://localhost:8000/static/admin/', 'extra': '', 'sid': '0', 'dir': '_i9/0' },
    { 'url': 'http://localhost:8000/static/admin/css/', 'extra': '', 'sid': '0', 'dir': '_i9/1' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:8000/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i10/0' },
    { 'url': 'http://localhost:8000/admin/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i10/1' },
    { 'url': 'http://localhost:8000/static/account_adder.js/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i10/2' },
    { 'url': 'http://localhost:8000/static/admin/css/base.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i10/3' },
    { 'url': 'http://localhost:8000/static/admin/css/forms.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i10/4' },
    { 'url': 'http://localhost:8000/static/admin/css/login.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i10/5' },
    { 'url': 'http://localhost:8000/static/admin/css/responsive.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i10/6' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://localhost:8000/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i11/0' },
    { 'url': 'http://localhost:8000/static/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i11/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://localhost:8000/', 'extra': 'WSGIServer/0.2 CPython/3.6.7', 'sid': '0', 'dir': '_i12/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://localhost:8000/logout/', 'extra': 'sessionid', 'sid': '0', 'dir': '_i13/0' } ]
  }
];

