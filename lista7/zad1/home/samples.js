var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:8000/', 'dir': '_m0/0', 'linked': 2, 'len': 301 },
    { 'url': 'http://localhost:8000/accounts/login/?next=/transfer/', 'dir': '_m0/1', 'linked': 2, 'len': 4007 },
    { 'url': 'http://localhost:8000/admin/login/', 'dir': '_m0/2', 'linked': 5, 'len': 1996 },
    { 'url': 'http://localhost:8000/admin/login/', 'dir': '_m0/3', 'linked': 5, 'len': 2513 },
    { 'url': 'http://localhost:8000/admin/login/', 'dir': '_m0/4', 'linked': 5, 'len': 2129 },
    { 'url': 'http://localhost:8000/admin/password_reset/', 'dir': '_m0/5', 'linked': 5, 'len': 1730 },
    { 'url': 'http://localhost:8000/admin/password_reset/done/', 'dir': '_m0/6', 'linked': 2, 'len': 1387 },
    { 'url': 'http://localhost:8000/login/', 'dir': '_m0/7', 'linked': 5, 'len': 882 },
    { 'url': 'http://localhost:8000/login/', 'dir': '_m0/8', 'linked': 0, 'len': 1032 },
    { 'url': 'http://localhost:8000/logout/', 'dir': '_m0/9', 'linked': 0, 'len': 403 },
    { 'url': 'http://localhost:8000/register/', 'dir': '_m0/10', 'linked': 5, 'len': 3545 },
    { 'url': 'http://localhost:8000/register/', 'dir': '_m0/11', 'linked': 5, 'len': 3906 },
    { 'url': 'http://localhost:8000/static/', 'dir': '_m0/12', 'linked': 2, 'len': 1634 } ]
  },
  { 'mime': 'text/css', 'samples': [
    { 'url': 'http://localhost:8000/static/admin/css/base.css/', 'dir': '_m1/0', 'linked': 2, 'len': 16225 },
    { 'url': 'http://localhost:8000/static/admin/css/forms.css/', 'dir': '_m1/1', 'linked': 2, 'len': 8505 },
    { 'url': 'http://localhost:8000/static/admin/css/login.css/', 'dir': '_m1/2', 'linked': 2, 'len': 1203 },
    { 'url': 'http://localhost:8000/static/admin/css/responsive.css/', 'dir': '_m1/3', 'linked': 2, 'len': 17976 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://localhost:8000/static/', 'dir': '_m2/0', 'linked': 2, 'len': 59 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40501, 'samples': [
    { 'url': 'http://localhost:8000/admin/login/', 'extra': 'responses for ./val and .../val look different', 'sid': '0', 'dir': '_i0/0' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost:8000/admin/password_reset/', 'extra': '', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'http://localhost:8000/static/', 'extra': '', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://localhost:8000/static/admin/', 'extra': '', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://localhost:8000/static/admin/css/', 'extra': '', 'sid': '0', 'dir': '_i2/2' },
    { 'url': 'http://localhost:8000/static/admin/css/base.css/', 'extra': '', 'sid': '0', 'dir': '_i2/3' },
    { 'url': 'http://localhost:8000/static/admin/css/forms.css/', 'extra': '', 'sid': '0', 'dir': '_i2/4' },
    { 'url': 'http://localhost:8000/static/admin/css/login.css/', 'extra': '', 'sid': '0', 'dir': '_i2/5' },
    { 'url': 'http://localhost:8000/static/admin/css/responsive.css/', 'extra': '', 'sid': '0', 'dir': '_i2/6' } ]
  },
  { 'severity': 0, 'type': 10802, 'samples': [
    { 'url': 'http://localhost:8000/static/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://localhost:8000/static/admin/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'http://localhost:8000/static/admin/css/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i3/2' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://localhost:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://localhost:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i4/1' },
    { 'url': 'http://localhost:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i4/2' },
    { 'url': 'http://localhost:8000/login/', 'extra': '', 'sid': '0', 'dir': '_i4/3' },
    { 'url': 'http://localhost:8000/login/', 'extra': '', 'sid': '0', 'dir': '_i4/4' },
    { 'url': 'http://localhost:8000/register/', 'extra': '', 'sid': '0', 'dir': '_i4/5' },
    { 'url': 'http://localhost:8000/register/', 'extra': '', 'sid': '0', 'dir': '_i4/6' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://localhost:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://localhost:8000/admin/logout/', 'extra': '', 'sid': '0', 'dir': '_i5/1' },
    { 'url': 'http://localhost:8000/login/', 'extra': '', 'sid': '0', 'dir': '_i5/2' },
    { 'url': 'http://localhost:8000/logout/', 'extra': '', 'sid': '0', 'dir': '_i5/3' } ]
  },
  { 'severity': 0, 'type': 10403, 'samples': [
    { 'url': 'http://localhost:8000/static/', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://localhost:8000/static/admin/', 'extra': '', 'sid': '0', 'dir': '_i6/1' },
    { 'url': 'http://localhost:8000/static/admin/css/', 'extra': '', 'sid': '0', 'dir': '_i6/2' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://localhost:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'http://localhost:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i7/1' },
    { 'url': 'http://localhost:8000/login/', 'extra': '', 'sid': '0', 'dir': '_i7/2' },
    { 'url': 'http://localhost:8000/login/', 'extra': '', 'sid': '0', 'dir': '_i7/3' },
    { 'url': 'http://localhost:8000/login/', 'extra': '', 'sid': '0', 'dir': '_i7/4' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:8000/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'http://localhost:8000/admin/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/1' },
    { 'url': 'http://localhost:8000/static/admin/css/base.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/2' },
    { 'url': 'http://localhost:8000/static/admin/css/forms.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/3' },
    { 'url': 'http://localhost:8000/static/admin/css/login.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/4' },
    { 'url': 'http://localhost:8000/static/admin/css/responsive.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/5' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://localhost:8000/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i9/0' },
    { 'url': 'http://localhost:8000/static/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i9/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://localhost:8000/', 'extra': 'WSGIServer/0.2 CPython/3.6.7', 'sid': '0', 'dir': '_i10/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://localhost:8000/login/', 'extra': 'csrftoken', 'sid': '0', 'dir': '_i11/0' } ]
  }
];

