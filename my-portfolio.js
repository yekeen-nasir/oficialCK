function chmode() {
    var x = document.getElementById("cont")
    var y = document.getElementById("lit")
    if(x.className == "container"){
        x.classList.remove("container")
        x.classList.add("light")
        y.innerText = " Mode"
    }else{
        x.classList.remove("light")
        x.classList.add("container")
        y.innerText = " Mode"
    }

}
 function click() {
    document.getElementById("clicky").style.color = "white"
 }
//     function rchmode() {
//         if (document.body.style.background = "lightblue") {
//  document.getElementById("bdbackground").style.backgroundColor.value()
//         }

//     }
    $(function() {

        // $(document).ready(function() {
        //     $(".size1").slideDown(4000)
        // })
    })
    $(document).ready(function() {
        $("li").click(function() {
            $("li.active").removeClass("active");
            $(this).addClass("active")
    })
    })

    $(function() {
        $(".cg").hide()
    })
    // $(function() {
        // $(".bi-caret-down-square-fill").click(function() {
        //     $("ul").toggle(500)
        //     $(".cg").show(1000)
        //     // $("ul").hide(1000)
        // })
        $(document).ready(function(){    
            $(".bi-caret-down-square-fill").click(function(){ 
                $(this).hide(1000)  
                $(".bi-caret-up-square-fill").show(1000)
                $("ul").show(1000);  
                $(".cg").show(1000)  
            });    
        });  
        $(function() {
            $("#menu1").click(function() {
                $(this).hide(1000)  
                $(".bi-caret-down-square-fill").show(1000)
                $("ul").hide(1000)
            })
        })

        // $("#menu").click(function() {
        //     $("ul").hide(1000)
        // })
    // })
    $(function() {
        $(".align").hide()
        $(".mskill").hide()
        $(".machive").hide()
        $(".mservice").hide()
        $(".mcontact").hide()
    })
    $(function() {
        $(".bi-house-fill").click(function() {
            $(".size1").toggle(1000)
            $(".size2").toggle(1500)
            $(".size3").toggle(2000)
            $(".size4").toggle(2500)
            // $(".align").hide(1000)
            $(".c1").show(500)
            // $("ul").hide(1000)
            // $("h1").show(2000)
            // $(".sub-home").toggle(3000)
            $(".bi-house-fill").mouseleave(function() {
            $(".c1").hide()
        })    
        })
        $(".bi-person-fill").click(function() {
            $(".align").show(1000)
            $(".c2").show(500)
            // $("ul").hide(1000)
            // $("h1").slideUp(2000)
            // $(".sub-home").show(3000)
            $(".bi-person-fill").mouseleave(function() {
            $(".c2").hide()
        })    
        })
        $(".bi-list-stars").click(function() {
            // $(".align").hide(1000)
            $(".c3").show(500)
            $(".mskill").show(1000)
            // $("ul").hide(1000)
            // $("h1").slideUp(2000)
            // $(".sub-home").show(3000)
            $(".bi-list-stars").mouseleave(function() {
            $(".c3").hide()
        })    
        })
        $(".bi-award-fill").click(function() {
            // $(".align").hide(1000)
        $(".machive").show(1000)
            $(".c4").show(500)
            // $("ul").hide(1000)
            // $("h1").slideUp(2000)
            // $(".sub-home").show(3000)
            $(".bi-award-fill").mouseleave(function() {
            $(".c4").hide()
        })    
        })
        $(".bi-laptop").click(function() {
            // $(".align").hide(1000)
            $(".c5").show(500)
            $(".mservice").show(1000)
            // $("ul").hide(1000)
            // $("h1").slideUp(2000)
            // $(".sub-home").show(3000)
            $(".bi-laptop").mouseleave(function() {
            $(".c5").hide()
        })    
        })
        $(".bi-telephone-forward-fill").click(function() {
            $(".c6").show(500)
             $(".mcontact").show(1000)
            //  $("ul").hide(1000)
            // $("h1").slideUp(2000)
            // $(".sub-home").show(3000)
            $(".bi-telephone-forward-fill").mouseleave(function() {
            $(".c6").hide()
        })    
        })
    })
   
