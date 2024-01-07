import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import spacefood from '../assets/spacefood.png?url'
import storespacefood from '../assets/storespacefood.png?url'
import gamersland from '../assets/gamersland.png?url'
import multiverseland from '../assets/multiverseland.png?url'

const ProjectCard = () => {
	return (
		<div className="bg-slate-100 mt-32 p-4 md:p-8">
			<div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 md:gap-8 lg:grid-cols-2">
				<Card
					heading="Space food"
					description="This is a full stack application, with advanced features, such as third-party authentication (google login), payment gateway, sending email notifications, among others! It was built using the PERN stack (Postgresql, Expressjs, React, Node), which emulates the operation of a fast food e-commerce "
					imgSrc={spacefood}
					url={'https://spacefood.gibsongil.store/'}
				/>
				<Card
					heading="Store space food"
					description="This is a full stack application emulates the operation of a fast food e-commerce from administration side "
					imgSrc={storespacefood}
					url={'https://storespacefood.gibsongil.store/'}
				/>
				<Card
					heading="Gamersland"
					description="This is a full-stack application based on the theme of retro videogames"
					imgSrc={gamersland}
					url={'https://gamersland.gibsongil.store/'}
				/>
				<Card
					heading="Multiverseland"
					description="This is a React application, based on the theme of the animated series Rick & Morty, which shows a series of cards with the basic information of each character in the serie"
					imgSrc={multiverseland}
					url={'https://multiverseland.gibsongil.store/home'}
				/>
			</div>
		</div>
	)
}

const Card = ({ heading, description, imgSrc, url }) => {
	return (
		<a href={url}>
			<motion.div
				transition={{
					staggerChildren: 0.035
				}}
				whileHover="hover"
				className="bg-slate-300 group relative h-64 w-full cursor-pointer overflow-hidden"
			>
				<div
					className="absolute inset-0 saturate-100 transition-all duration-500 group-hover:scale-110 md:saturate-0 md:group-hover:saturate-100 "
					style={{
						backgroundImage: `url(${imgSrc})`,
						backgroundSize: 'cover',

						backgroundPosition: 'center'
					}}
				/>
				<div className="group-hover:text-white relative z-20 flex  h-full  flex-col justify-between p-4 text-primary-80 transition-colors duration-500 hover:text-[#0eab29]">
					<FiArrowRight className="ml-auto text-3xl transition-transform duration-500 group-hover:-rotate-45" />
					<div>
						<h4>
							{heading.split('').map((l, i) => (
								<ShiftLetter letter={l} key={i} />
							))}
						</h4>
						<p>{description}</p>
					</div>
				</div>
			</motion.div>
		</a>
	)
}

const ShiftLetter = ({ letter }) => {
	return (
		<div className="inline-block h-[36px] overflow-hidden text-3xl font-semibold">
			<motion.span
				className="flex min-w-[4px] flex-col"
				style={{
					y: '0%'
				}}
				variants={{
					hover: {
						y: '-50%'
					}
				}}
				transition={{
					duration: 0.5
				}}
			>
				<span>{letter}</span>
				<span>{letter}</span>
			</motion.span>
		</div>
	)
}

export default ProjectCard
