#!/usr/bin/python3

# This is 'build.php' re-implemented in Python, with various modifications.

import os
import json


os.chdir('../')
ROOT=os.getcwd()
os.chdir('bin')


# Get version
def getVersion():
    # $version_file = ROOT . 'version.json';
    version_file = os.path.join(ROOT, 'version.json')

    # $v = json_decode(file_get_contents($version_file));
    with open(version_file) as f:
      v = json.load(f)

    # return "{$v->major}.{$v->minor}.{$v->build}";
    return "{}.{}.{}".format(v['major'], v['minor'], v['build'])




# Build setup
def setup():
	#$build_dir = ROOT . 'build';
    build_dir = os.path.join(ROOT, 'build')

	#exec("rm -rf {$build_dir}");
    os.system('rm -rf '+build_dir)

	#exec("mkdir {$build_dir}");
    os.system('mkdir '+build_dir)




# Cleanup
def cleanup():
	#unlink(ROOT . 'horde.js');
    os.remove(os.path.join(ROOT, 'horde.js'))
 



# Compile a bunch of JS files
def compileJS (files, target, version, demo = False):
	# $js = '';
    js1 = '';

    # foreach ($files as $filename) {
    #     $js .= file_get_contents($filename);
    # }
    for filename in files:
        file = open(filename, mode='r')
        filedat = file.read()
        file.close()
        js1 = js1 + filedat

    # $js = <<< JAVASCRIPT
    # (function () {
    #     {$js}
    # }());
    # JAVASCRIPT;
    js = '(function () {' + ' {' + js1 + '} ' + '}());'

    # if ($demo) {
    #     $js = str_replace('var DEMO = false;', 'var DEMO = true;', $js);
    # }

    # $js = str_replace('{{VERSION}}', $version, $js);
    js = js.replace('{{VERSION}}', version)

    # file_put_contents(ROOT . 'tmp.js', $js);
    file = open(os.path.join(ROOT, 'tmp.js'), mode='w')
    file.write(js)
    file.close()


    # $command =
    #     'closure-compiler ' .
    #     " --js_output_file {$target}" .
    #     ' --compilation_level SIMPLE_OPTIMIZATIONS' .
    #     ' --js ' . ROOT . 'tmp.js';
    command = 'closure-compiler --js_output_file {} --compilation_level SIMPLE_OPTIMIZATIONS --js {}'.format(target, os.path.join(ROOT, 'tmp.js'))

    # exec($command);
    os.system(command)

    # unlink(ROOT . 'tmp.js');
    os.remove(os.path.join(ROOT, 'tmp.js'))








# Build the web version
def buildWeb(version):
	# FULL
	# $compiled_js = file_get_contents(ROOT . 'horde.js');
    file = open(os.path.join(ROOT, 'horde.js'), mode='r')
    compiled_js = file.read()
    file.close()

	# $tpl = file_get_contents(ROOT . 'template/web.template.html');
    file = open(os.path.join(ROOT, 'template/web.template.html'), mode='r')
    tpl = file.read()
    file.close()

	# $tpl = str_replace('{{TYPE}}', 'full', $tpl);
    tpl = tpl.replace('{{TYPE}}', 'full')

	# $tpl = str_replace('{{GAME_CODE}}', $compiled_js, $tpl);
    tpl = tpl.replace('{{GAME_CODE}}', compiled_js)

	# $tpl = str_replace('{{VERSION}}', $version, $tpl);
    tpl = tpl.replace('{{VERSION}}', version)

	# $tpl = str_replace(
	# 	'{{AD_LEADERBOARD}}',
	# 	file_get_contents(ROOT . 'template/ad_leaderboard.html'),
	# 	$tpl
	# );

    # file = open(os.path.join(ROOT, 'template/ad_leaderboard.html'), mode='r')
    # leaderboard = file.read()
    leaderboard = ''
    # file.close()
    tpl = tpl.replace('{{AD_LEADERBOARD}}', leaderboard)



	# // SHARED
	# $web_root = ROOT . 'build/web/';
    web_root = os.path.join(ROOT, 'build/web/')

	# $htdocs = ROOT . 'htdocs';
    htdocs = os.path.join(ROOT, 'htdocs')

	# exec("mkdir {$web_root}");
    os.system('mkdir -p ' + web_root)

	# file_put_contents("{$web_root}index.html", $tpl);
    file = open(os.path.join(web_root, 'index.html'), mode='w')
    file.write(tpl)
    file.close()

	# //file_put_contents("{$web_root}demo.html", $demo_tpl);
	# exec("cp -r {$htdocs}/img {$web_root}");
    os.system('cp -r '+ htdocs+'/img ' + web_root)

	# exec("cp -r {$htdocs}/css {$web_root}");
    os.system('cp -r '+ htdocs+'/css ' + web_root)

	# exec("cp -r {$htdocs}/font {$web_root}");
    os.system('cp -r '+ htdocs+'/font ' + web_root)

	# exec("cp -r {$htdocs}/sound {$web_root}");
    os.system('cp -r '+ htdocs+'/sound ' + web_root)

    os.system('cp -r '+ htdocs+'/vendor ' + web_root) # Added

	# exec("cp -r {$htdocs}/robots.txt {$web_root}");
    os.system('cp -r '+ htdocs+'/robots.txt ' + web_root)

	# exec("pngcrush -reduce -d {$web_root}img {$htdocs}/img/*.png");
    os.system('pngcrush -q -reduce -d ' + web_root+'/img' + htdocs+'/img/*.png') # Added '-q', quiet.






js_dir = os.path.join(ROOT, 'htdocs/js')
source_js = [
	js_dir + '/base.js',
	js_dir + '/timer.js',
	js_dir + '/sound.js',
	js_dir + '/size.js',
	js_dir + '/vector2.js',
	js_dir + '/rect.js',
	js_dir + '/keyboard.js',
	js_dir + '/mouse.js',
	js_dir + '/', # Append wave file to index 8!
	js_dir + '/engine.js',
	js_dir + '/object.js',
	js_dir + '/object_types.js',
	js_dir + '/encoded_pngs.js', # Added
	js_dir + '/image_loader.js',
	js_dir + '/spawn_point.js',
	js_dir + '/spawn_wave.js',
	js_dir + '/run_game.js'
]

version = getVersion()
print("Building Onslaught! Arena v{}".format(version));

full_version = source_js;
full_version[8] = js_dir + '/waves_full.js'

print("Compiling Full Version JavaScript...")
compileJS(full_version, os.path.join(ROOT, 'horde.js'), version)

setup()

print("Building web version...")
buildWeb(version)

cleanup()

print("Done!")
