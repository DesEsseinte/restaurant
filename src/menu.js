export default function displayMenu(){
	const head = document.createElement('h1');
	content.appendChild(head);
	
	const div1=document.createElement('div');
	const div2=document.createElement('div');
	const div3=document.createElement('div');
		div1.classList.add('textBox');
		div2.classList.add('textBox');
		div3.classList.add('textBox');
			div1.innerHTML = "Starters"
			div2.innerHTML = "Main"
			div3.innerHTML = "Dessert"
		content.appendChild(div1);
		content.appendChild(div2);
		content.appendChild(div3);
	}

