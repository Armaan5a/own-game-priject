class Form
{
    constructor()
    {

    }

    instructionScreen()
    {
        var instructions=createElement("p");
        instructions .html("Press UP ARROW and DOWN ARROW , LEFT OR RIGHT ARROW");
        instructions.position(100,150);

        var btn3=createButton("GAME START")
        btn3.position(width/2,100)


        btn3.mousePressed(()=>{
           
            instructions.hide()
            btn3.hide()
            gameState="START"
        })
    }
}