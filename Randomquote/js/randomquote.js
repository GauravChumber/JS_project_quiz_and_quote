// GAURAV

// adding multiple quotes using Array
let quotes = [

    { "quote":"Give someone a program; you frustrate them for a day; teach them how to program, and you frustrate them for a lifetime",
       "author":"David Leinweber"
    },
    { "quote":" Bad programmers worry about the code. Good programmers worry about data structures and their relationships",
       "author":"Linus Torvalds"
    },
    
    { "quote":"Debugging becomes significantly easier if you first admit that you are the problem",
       "author":"William Laeder"
    },
    
    { "quote":"One of my most productive days was throwing away 1000 lines of code ",
       "author":" Ken Thompson"
    },
    
    { "quote":"System programmers are the high priests of a low cult",
       "author":"Robert S. Barton"
    },
    
    { "quote":"A good programmer is someone who always looks both ways before crossing a one-way street",
       "author":"Doug Linder"
    },
    
    { "quote":"If debudding is the process of removing software bugs, then programming must be the process of putting them in",
       "author":"Edsger W. Dijkstra"
    }
        ]
        const $btn = $('#button');
    //jquery actions will only happen if user clicks on the button
                $btn.click(function ()
                {
    
                    
                    $("#quote").slideUp(2000);  $("#author").slideUp(2000);
                    $btn.attr("disabled", true);
    //setting timers for the action
                    setTimeout(() => {
                      let number = Math.floor(Math.random()*quotes.length);
                      $('#quote').html('<span>"</span>'+ quotes[number].quote + '<span>"</span>');
                      $('#author').html('<span>"</span>'+ quotes[number].author);
                      $("#quote").slideDown(2000);  $("#author").slideDown(2000);
                    }, 2000) 
   
    
});
    