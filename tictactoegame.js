window.onload = function (){
	// we create a component to set the board table squares based on our template
	Vue.component("item", {
		props: ['square'],
		template: `<div class="item">
		<div v-bind:class="square.tableitem" v-bind:id="square.id" v-on:click.once="saturn(); whoWon()" v-on:click.ctrl.once="uranus(); whoWon()">{{ square.planet }}
		</div>
		</div>`,
		methods:{
			// if the user clicks then the square will turn into saturn and the innerHTML of the div will be "saturn"
			// the innerHTML is important for the if statements to determine who wins.
			saturn : function(event){
				this.square.tableitem='saturn';
				this.square.planet ='saturn';
				//console.log(this.square.id);
				
			},
			// if the user ctrl+clicks then the square will turn into uranus and the innerHTML of the div will be "uranus"
			// the innerHTML is important for the if statements to determine who wins.
			uranus : function(event){
				this.square.tableitem='uranus';
				this.square.planet ='uranus';
				//console.log(this.square.id);
			},
			//IF square id 1,2,3 or 4,5,6 or 7,8,9 or 1,4,7 or 2,5,8 or 3,6,9 or 1,5,9 or 3,5,7 inner html is = to saturn, SATURN wins, 
			//ELSE IF square id 1,2,3 or 1,4,7 or 1,5,9 or 3,5,7 inner html is = to uranus, URANUS wins,
			whoWon : function(){

				var square1 = document.getElementById('1').innerHTML;
				var square2 = document.getElementById('2').innerHTML;
				var square3 = document.getElementById('3').innerHTML;
				var square4 = document.getElementById('4').innerHTML;
				var square5 = document.getElementById('5').innerHTML;
				var square6 = document.getElementById('6').innerHTML;
				var square7 = document.getElementById('7').innerHTML;
				var square8 = document.getElementById('8').innerHTML;
				var square9 = document.getElementById('9').innerHTML;

					if (square1 == "saturn" && square2 == "saturn" && square3 == "saturn" | 
					square4 == "saturn" && square5 == "saturn" && square6 == "saturn" | 
					square7 == "saturn" && square8 == "saturn" && square9 == "saturn" | 
					square1 == "saturn" && square4 == "saturn" && square7 == "saturn" | 
					square2 == "saturn" && square5 == "saturn" && square8 == "saturn" | 
					square3 == "saturn" && square6 == "saturn" && square9 == "saturn" | 
					square1 == "saturn" && square5 == "saturn" && square9 == "saturn" | 
					square3 == "saturn" && square5 == "saturn" && square7 == "saturn" ){
						//console.log(square1);
						alert('SATURN WINS');
					} else if (square1 == "uranus" && square2 == "uranus" && square3 == "uranus" |  
					square4 == "uranus" && square5 == "uranus" && square6 == "uranus" | 
					square7 == "uranus" && square8 == "uranus" && square9 == "uranus" | 
					square1 == "uranus" && square4 == "uranus" && square7 == "uranus" | 
					square2 == "uranus" && square5 == "uranus" && square8 == "uranus" | 
					square3 == "uranus" && square6 == "uranus" && square9 == "uranus" | 
					square1 == "uranus" && square5 == "uranus" && square9 == "uranus" | 
					square3 == "uranus" && square5 == "uranus" && square7 == "uranus" ){
						//console.log(square1);
						alert('URANUS WINS');
					}
					//if statement is not working, tried using just one "=" but then the alert would happen even if the condition wasn't met
			}
		}
	});

	// we create a Vue app that holds the board table for the game
	// we set the values for the for loop that holds the squares
	new Vue({
	el: "#game",
	data(){
		return{
			//we give planet (which is where the name of the planet of the player that clicked will appear) an empty initial value
			//give the initial class of the table item which we'll use to turn the square into the planet
			squares: [
				{
					planet:'',
					tableitem: 'table-item',
					id:1
				},
				{
					planet:'',
					tableitem: 'table-item',
					id:2
				},
				{
					planet:'',
					tableitem: 'table-item',
					id:3
				},
				{
					planet:'',
					tableitem: 'table-item',
					id:4
				},
				{
					planet:'',
					tableitem: 'table-item',
					id:5
				},
				{
					planet:'',
					tableitem: 'table-item',
					id:6
				},
				{
					planet:'',
					tableitem: 'table-item',
					id:7
				},
				{
					planet:'',
					tableitem: 'table-item',
					id:8
				},
				{
					planet:'',
					tableitem: 'table-item',
					id:9
				},
			]
			};
		}

	});
	
	// we create a component to set the users player info based on our template
	Vue.component("user", {
		props: ['player'],
		template: `<div class="user">
		<span> {{ player.planet }} </span>
		<img :src="player.img" width="150" height="auto" />
		<slot></slot>
		<input type="text" v-bind:class="player.enterplayer" v-model="player.name" placeholder="Enter player name...">
		<button v-on:click="showhide();" v-bind:class="player.enterplayer" >Enter</button>
		<p>How to play: {{ player.desc }}</p>
		</div>`,
		methods:{
			showhide:function(){
				//when the user clicks the enter button the class will change and the input and enter button will disappear
				this.player.enterplayer='enterhide';
				//console.log(this.player.enterplayer);
			}
	}
	});

	// we create a Vue app that holds the players components
	// we set the values for the for loop that holds the players
	new Vue({
	el: "#playersGame",
	data(){
		return{
			players: [
				{
					name:'',
					planet: 'Saturn',
					enterplayer: 'entername',
					img: 'saturn.png',
					desc: 'CLICK square once for your turn'
				},
				{
					name:'',
					planet: 'Uranus',
					enterplayer: 'entername',
					img: 'uranus.png',
					desc: 'CTRL+CLICK square once for your turn'
				},
			]
			};
		}

	});
}