var res = {'data':'HTTP/1.1 200 OK\x0aDate: Fri, 07 Dec 2018 21:51:30 GMT\x0aServer: WSGIServer/0.2 CPython/3.6.7\x0aContent-Type: text/html; charset=utf-8\x0aX-Frame-Options: SAMEORIGIN\x0aVary: Cookie\x0aContent-Length: 3809\x0aSet-Cookie: csrftoken=aD5DaCX8q9FgxJdRnevgMup8qJVOx2s0ADRTFaScYSGDJdDKKgHvqMFAvpASINlk; expires=Fri, 06 Dec 2019 21:51:30 GMT; Max-Age=31449600; Path=/; SameSite=Lax\x0a\x0a\x3c!DOCTYPE html\x3e\x0a\x0a\x3chtml lang=\x22en-us\x22 \x3e\x0a\x3chead\x3e\x0a\x3ctitle\x3e | Django site admin\x3c/title\x3e\x0a\x3clink rel=\x22stylesheet\x22 type=\x22text/css\x22 href=\x22/static/admin/css/base.css\x22\x3e\x0a\x3clink rel=\x22stylesheet\x22 type=\x22text/css\x22 href=\x22/static/admin/css/login.css\x22\x3e\x0a\x0a\x0a\x0a\x0a\x0a    \x3cmeta name=\x22viewport\x22 content=\x22user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0\x22\x3e\x0a    \x3clink rel=\x22stylesheet\x22 type=\x22text/css\x22 href=\x22/static/admin/css/responsive.css\x22\x3e\x0a    \x0a\x0a\x3cmeta name=\x22robots\x22 content=\x22NONE,NOARCHIVE\x22\x3e\x0a\x3c/head\x3e\x0a\x0a\x0a\x3cbody class=\x22 login\x22\x0a  data-admin-utc-offset=\x220\x22\x3e\x0a\x0a\x3c!-- Container --\x3e\x0a\x3cdiv id=\x22container\x22\x3e\x0a\x0a    \x0a    \x3c!-- Header --\x3e\x0a    \x3cdiv id=\x22header\x22\x3e\x0a        \x3cdiv id=\x22branding\x22\x3e\x0a        \x0a\x3ch1 id=\x22site-name\x22\x3e\x3ca href=\x22/admin/\x22\x3eBANK ZGCH\x3c/a\x3e\x3c/h1\x3e\x0a\x0a        \x3c/div\x3e\x0a        \x0a        \x0a    \x3c/div\x3e\x0a    \x3c!-- END Header --\x3e\x0a    \x0a    \x0a\x0a    \x0a        \x0a    \x0a\x0a    \x3c!-- Content --\x3e\x0a    \x3cdiv id=\x22content\x22 class=\x22colM\x22\x3e\x0a        \x0a        \x0a        \x0a\x0a\x3cp class=\x22errornote\x22\x3e\x0aPlease correct the error below.\x0a\x3c/p\x3e\x0a\x0a\x0a\x0a\x0a\x3cdiv id=\x22content-main\x22\x3e\x0a\x0a\x0a\x0a\x3cform action=\x22\x22 method=\x22post\x22 id=\x22login-form\x22\x3e\x3cinput type=\x22hidden\x22 name=\x22csrfmiddlewaretoken\x22 value=\x22Q8aP2Gbtd4sIKWGHRsbvGfji7CVgaiUzg8W5xe6xLNt5Wq6AeunKkxzKciAkl3NT\x22\x3e\x0a    \x0a    \x3cp\x3e\x0a      \x3clabel for=\x22id_username\x22\x3eUsername:\x3c/label\x3e\x3cbr\x3e\x0a      \x3cinput type=\x22text\x22 name=\x22username\x22 value=\x22Smith\x22 maxlength=\x22150\x22 autofocus required id=\x22id_username\x22\x3e\x0a      \x0a        \x3csmall style=\x22color: grey\x22\x3eRequired. 150 characters or fewer. Letters, digits and @/./+/-/_ only.\x3c/small\x3e\x0a      \x0a      \x0a    \x3c/p\x3e\x0a  \x0a    \x3cp\x3e\x0a      \x3clabel for=\x22id_first_name\x22\x3eFirst name:\x3c/label\x3e\x3cbr\x3e\x0a      \x3cinput type=\x22text\x22 name=\x22first_name\x22 value=\x22John\x22 maxlength=\x22100\x22 required id=\x22id_first_name\x22\x3e\x0a      \x0a      \x0a    \x3c/p\x3e\x0a  \x0a    \x3cp\x3e\x0a      \x3clabel for=\x22id_last_name\x22\x3eLast name:\x3c/label\x3e\x3cbr\x3e\x0a      \x3cinput type=\x22text\x22 name=\x22last_name\x22 value=\x22Smith\x22 maxlength=\x22100\x22 required id=\x22id_last_name\x22\x3e\x0a      \x0a      \x0a    \x3c/p\x3e\x0a  \x0a    \x3cp\x3e\x0a      \x3clabel for=\x22id_email\x22\x3eEmail:\x3c/label\x3e\x3cbr\x3e\x0a      \x3cinput type=\x22email\x22 name=\x22email\x22 value=\x22skipfish@example.com\x22 required id=\x22id_email\x22\x3e\x0a      \x0a      \x0a    \x3c/p\x3e\x0a  \x0a    \x3cp\x3e\x0a      \x3clabel for=\x22id_password1\x22\x3ePassword:\x3c/label\x3e\x3cbr\x3e\x0a      \x3cinput type=\x22password\x22 name=\x22password1\x22 required id=\x22id_password1\x22\x3e\x0a      \x0a        \x3csmall style=\x22color: grey\x22\x3e\x3cul\x3e\x3cli\x3eYour password can&#39;t be too similar to your other personal information.\x3c/li\x3e\x3cli\x3eYour password must contain at least 8 characters.\x3c/li\x3e\x3cli\x3eYour password can&#39;t be a commonly used password.\x3c/li\x3e\x3cli\x3eYour password can&#39;t be entirely numeric.\x3c/li\x3e\x3c/ul\x3e\x3c/small\x3e\x0a      \x0a      \x0a    \x3c/p\x3e\x0a  \x0a    \x3cp\x3e\x0a      \x3clabel for=\x22id_password2\x22\x3ePassword confirmation:\x3c/label\x3e\x3cbr\x3e\x0a      \x3cinput type=\x22password\x22 name=\x22password2\x22 required id=\x22id_password2\x22\x3e\x0a      \x0a        \x3csmall style=\x22color: grey\x22\x3eEnter the same password as before, for verification.\x3c/small\x3e\x0a      \x0a      \x0a        \x3cp style=\x22color: red\x22\x3eThe password is too similar to the email address.\x3c/p\x3e\x0a      \x0a    \x3c/p\x3e\x0a  \x0a  \x3c!-- \x3cdiv class=\x22form-row\x22\x3e\x0a    \x0a    \x3clabel for=\x22id_username\x22\x3eUsername:\x3c/label\x3e \x3cinput type=\x22text\x22 name=\x22username\x22 value=\x22Smith\x22 maxlength=\x22150\x22 autofocus required id=\x22id_username\x22\x3e\x0a  \x3c/div\x3e\x0a  \x3cdiv class=\x22form-row\x22\x3e\x0a    \x0a     \x0a    \x3cinput type=\x22hidden\x22 name=\x22next\x22 value=\x22\x22\x3e\x0a  \x3c/div\x3e\x0a  \x3cdiv class=\x22form-row\x22\x3e\x0a    \x0a    Reenter password:\x0a    \x0a    \x3cinput type=\x22hidden\x22 name=\x22next\x22 value=\x22\x22\x3e\x0a  \x3c/div\x3e\x0a  \x3cdiv class=\x22form-row\x22\x3e\x0a    \x0a    \x0a  \x3c/div\x3e\x0a  \x3cdiv class=\x22form-row\x22\x3e\x0a    \x0a    \x0a  \x3c/div\x3e\x0a  \x3cdiv class=\x22form-row\x22\x3e\x0a    \x3clabel for=\x22id_email\x22\x3eEmail:\x3c/label\x3e\x0a    \x3cinput type=\x22email\x22 name=\x22email\x22 value=\x22skipfish@example.com\x22 required id=\x22id_email\x22\x3e\x0a  \x3c/div\x3e --\x3e\x0a  \x3cdiv class=\x22submit-row\x22\x3e\x0a    \x3clabel\x3e&nbsp;\x3c/label\x3e\x3cinput type=\x22submit\x22 value=\x22Register\x22\x3e\x0a  \x3c/div\x3e\x0a\x3c/form\x3e\x0a\x0a\x3c/div\x3e\x0a\x0a        \x0a        \x3cbr class=\x22clear\x22\x3e\x0a    \x3c/div\x3e\x0a    \x3c!-- END Content --\x3e\x0a\x0a    \x3cdiv id=\x22footer\x22\x3e\x3c/div\x3e\x0a\x3c/div\x3e\x0a\x3c!-- END Container --\x3e\x0a\x0a\x3c/body\x3e\x0a\x3c/html\x3e\x0a'}