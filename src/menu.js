export default function displayMenu(){
	const head = document.createElement('h1');
	content.appendChild(head);
	
	const div1=document.createElement('div');
	const div2=document.createElement('div');
		div1.classList.add('textBox');
		div2.classList.add('textBox');
		
			div1.innerHTML = "Food:<br>Daube de Boeuf...........$20,00<br>Poulet au Porto...........$18,00<br>Navarin Printanier...........$22,00<br>Loup de mar...........$22,00<br>Quenelles de poisson...........$12,00"
			div2.innerHTML = "Drinks:<br>Wine<Br>Bordeaux...........$6,00<br>Chardonnay...........$5,00<br><br>Not wine<br>coffee...........$1,50"
			
		content.appendChild(div1);
		content.appendChild(div2);
		
	}

