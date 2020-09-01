function auto_selection_bar(ids){
    let containers = ids; 
    let landmarks = [0];
    let heightSum = 0;
    let body_size = document.body.scrollHeight;
    let navigation = new Map();
    let count = 0;
    let start = 0;
    let end = 0;
    let shift = 300;

    this.run = function(){
        //Building Phase
        get_sizes(); 
        document.body.scrollHeight <= 766 ? set_landmarks(0) : set_landmarks(shift);;
        check_area(this.normal, this.selected);

        //Event Phase
        window.onresize=()=>{
            if(document.body.scrollHeight !== body_size){
                get_sizes();
                document.body.scrollHeight <= 766 ? set_landmarks(0) : set_landmarks(shift);
                check_area(this.normal, this.selected);
            }    
        };

        document.addEventListener('scroll',()=>{
            check_area(this.normal, this.selected);
        });

    };

    function get_sizes(){
        landmarks = [0];
        heightSum = 0;
        containers.forEach(item=>{
            let element = document.getElementById(item); 
            heightSum += element.clientHeight;
            landmarks.push(heightSum);
        }); 
        landmarks = landmarks.slice(0,landmarks.length-1);
    };


    function set_landmarks(land){
        count = 0;
        containers.forEach(item=>{
            start = landmarks[count];
            if(count===landmarks.length-1){
                end = 9999999;
            }else{
                end = landmarks[count+1]-1;
            }
            navigation.set(item,{
                "start":start-land || 0,
                "end":end-land || 0
            });
            count++;
        });
    }

    function check_area(normal, selected){
        for(let item of navigation){
            if(window.scrollY >= item[1].start && window.scrollY <= item[1].end){
                for(let buttonName of containers){
                    let button = document.getElementById(buttonName+"-button");
                    button.setAttribute("class", normal);
                }
                let button = document.getElementById(item[0]+"-button");
                button.setAttribute("class", selected);
            }
        }
    }
}
