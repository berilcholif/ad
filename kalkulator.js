let keluaran = document.getElementById("keluaran");
        function display(num){
            keluaran.value += num;
        }
        function Clear(){
            keluaran.value = "";
        }
        function del(){
            keluaran.value = keluaran.value.slice(0,-1);
        }
        function Calculate(){
            try{
                keluaran.value = eval(keluaran.value);
            }
            catch(err){
                alert("error")
            }
        }