 window.onload = function(){
       
        var loader = document.getElementsByClassName("loader")[0];
        loader.className="loader fadeout" ;
        setTimeout(function(){loader.style.display="none"},1000)
        var editor = CodeMirror.fromTextArea(document.querySelector("#script_code"), {
            height: "400px",
            lineNumbers: true,
            mode:"javascript",　
            lineWrapping:false, 
            theme: "pastel-on-dark"
         });
        
        var socket = io.connect('ws://127.0.0.1:8202');

        var locked = false;

        editor.on("change", function (Editor, changes) { 
            if( !locked ) {
                socket.emit('rootChange', {code:editor.getValue()});
            }
        });

        socket.on('rootMessage',function(data){     
            editor.setValue(data); 

            throttle(function() {
                locked = false;
                editor.setOption("readOnly", false); 
            },1000)();
        });

        socket.on('isEditing',function(data){   
            editor.setOption("readOnly", true); 
            locked = true;
        });
        

        function throttle(method,delay){
            var timer=null;
            return function(){
                var context=this, args=arguments;
                clearTimeout(timer);
                timer=setTimeout(function(){
                    method.apply(context,args);
                },delay);
            }
        }
    }  