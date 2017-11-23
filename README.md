# bookreader

## what is this?

server-side book reader

## configure

change

index.php , pic.php line 12

```
	$define['HOME_DIR'] = '/home/tknr/';
```

to your home directory which zip-archived book exists.

## url parameter

f : zip file path

p : page (starts 0)

### url example
http://localhost/bookreader/?p=0&f=example.zip

## operating procedure

swipe left : prev page

swipe right : next page

tap on image : shows info on header , and control buttons on footer

bookmark : go to url that page callled for bookmark

swipe up on footer : show more controll buttons


