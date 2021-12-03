export default function displayContact(){
	const head = document.createElement('h1');
	content.appendChild(head);
	
	const div1=document.createElement('div');
	const div2=document.createElement('div');
	const div3=document.createElement('div');
		div1.classList.add('textBox');
		div2.classList.add('textBox');
		div3.classList.add('textBox');
			div1.innerHTML = "Contact us. 91.635.888.9242 or email:amuchbatterplace@gmail.com"
			div2.innerHTML = "Directions: C/Doctor Castelo 6 Madrid, Spain"
			div3.innerHTML = "Hope to see you soon!"
		content.appendChild(div1);
		content.appendChild(div2);
		content.appendChild(div3);
	}
