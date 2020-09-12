import React from 'react';
import bandeau from '../assets/bandeau2.jpg';
import './home.css';

const Home = (props) => {
	return (
		<div className="home">
			<img className="bandeau" src={bandeau} alt="rond" />
			<h2 id="ancre1">Bienvenue au Wild Circus</h2>
			<ul class="ligne">
				<li>
					<h3 className="bordure">Laugh</h3>
					<p className="homePara">
						As an adult, come and discover our irresistible clowns, between practical jokes and pranks let
						yourself be carried away by their joy and fall back into childhood.
					</p>
				</li>

				<li>
					<h3 className="bordure">Dream</h3>
					<p className="homePara">
						Let yourself be carried away in a world where the real and the imaginary are one, in the company
						of our talented magicians, discover a wonderful world limited only by your imagination.
					</p>
				</li>

				<li>
					<h3 className="bordure">Marvel at</h3>
					<p className="homePara">
						Tame the untameable in the company of our tamers, between roar and razor-sharp claws, watch
						these fierce felines turn into sweet kittens.
					</p>
				</li>
			</ul>
			<div className="outro">
				<p id="about">
					Founded in 1958, the Wild Circus settle down like the biggest circus. Laugh and relaxation are
					insured in every show. The word doesn't be enough to describe it. Come and see by yourself and let
					you carried off by the fairy of the circus.
				</p>
			</div>
		</div>
	);
};

export default Home;
