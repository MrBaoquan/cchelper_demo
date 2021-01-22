set version=v0.1.0
set plugin_name=cchelper

set build_src=.\
set build_target=.\%plugin_name%-%version%\

if not exist %build_target% md %build_target%
if not exist %build_target%assets\%plugin_name%\ md %build_target%assets\%plugin_name%\
if not exist %build_target%declarations\ md %build_target%declarations\

xcopy %build_src%assets\%plugin_name% %build_target%assets\%plugin_name%\ /E /F /Y
xcopy %build_src%declarations %build_target%declarations\ /E /F /Y
copy %build_src%assets\%plugin_name%.meta %build_target%assets\ /Y

tar -zcvf %plugin_name%-%version%.tar.gz .\%plugin_name%-%version%
rd /S /Q %build_target%


pause
