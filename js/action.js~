$(function(){
   SEGMENTS=[];
   previous_token=-1

// handle indirect label

   function indirect(){
     $("#panel_choixdicours").css("display","none");
     $("#panel_indirect").css("display","block");

       $comment =$("#comment")
         $emotion =$("#emotion")



   }

// handle incidental label
    function incidental(){

      $("#panel_choixdicours").css("display","none");
      $("#panel_incidental").css("display","block");
      $comment =$("#comment")



    }



// handle direct discourse
   function direct(wtg_deb,wtg_fin)
        {

          $("#panel_choixdicours").css("display","none");
          $("#panel_direct").css("display","block");

          $pseudo = $("#Pseudo")
          $genre = $("#Genre")
          $age = $("#Age")
          $role = $("#Role")

          $("#val_direct").one("click",function(){
            entry={};

            entry["pseudo"]=$pseudo.val();
            entry["genre"]=$genre.find('option:selected').text();
            entry["age"]=$age.find('option:selected').text();
            entry["role"]=$role.find('option:selected').text();

            entry["deb"]=wtg_deb;
            entry["fin"]=wtg_fin;


            SEGMENTS.push(entry);

            $pseudo.val("");
            $("#panel_direct").css("display","none");
            $("#panel_choixdicours").css("display","block");
            $("#panel").css("display","none");
            $("token").on("click",selectUtt);


          });
        }



// Saving data on json






// annotation
   function annotation(wtg_deb,wtg_fin)
   {

     deb = parseInt($("#"+wtg_deb).attr("timedeb"))/10000;
     fin = parseInt($("#"+wtg_fin).attr("timeend"))/10000;
     alert(wtg_deb);
     alert(wtg_fin);
     console.log(deb);
     console.log(fin);

     var sound = new Howl({
        src: ['samples/sue_mysteresdeparis_01_01_097.wav'],
          sprite: {
            winteriscoming: [deb,fin]
          }
      });

      sound.play("winteriscoming");


     $("#Direct").one("click",function()
     {
       direct(wtg_deb,wtg_fin);

     });

     $("#Indirect").one("click",function(){

       indirect()

     });

     $("#Incise").one("click",function(){

        incidental()
     });

     $("#panel").css("display","block");

   }
   // selected utterance
    function selectUtt(e)
    {
        ID = e.currentTarget.attributes.id.value;
        $("#"+ID).css('background-color', 'red');

        ID=parseInt(ID);


        if(previous_token != -1)
        {
            if(previous_token < ID)
            {
              deb=previous_token;
              i=previous_token;
              fin=ID;
            }
            else {
              deb=ID;
              i=ID;
              fin=previous_token;
            }

            while(i < fin)
            {
              $("#"+i).css('background-color', 'red');
              i=i+1;
            }

            ID=-1

            $("token").off("click");
            annotation(deb,fin);

        }
        previous_token=ID
        console.log(SEGMENTS);

    }

    $("token").on("click",selectUtt);


});
