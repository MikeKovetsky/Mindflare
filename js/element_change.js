jQuery (document).ready(function(){

    $("#tlt").textillate({
        selector:'.phrases',
        loop: true,
        minDisplayTime: 7000,

        in: {
            effect:'fadeInRight',
            shuffle: true,
            delay: 20,
        },

        out:{
            effect:'fadeOutRight',
            shuffle: true,
            delay: 20,
        },

    });

})