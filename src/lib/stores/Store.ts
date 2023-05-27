import { writable } from 'svelte/store';

interface Destination {
  id: number;
  destination: string;
  price: number;
  image: string;
}

const destinations: Array<Destination> = [
  {
    id: 1, 
    destination: 'Island Sunset and Skyway Light Show in St. Petersburg', 
    price: 104.95, 
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/d1/3a/ae/caption.jpg?w=800&h=600&s=1'
  },
  {
    id: 3, 
    destination: '4-Hour St. Pete Pier to Egmont Key', 
    price: 188, 
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/76/cb/04/caption.jpg?w=800&h=600&s=1'
  },
  {
    id: 4, 
    destination: 'Guided Tampa Tour in a Deluxe Street Legal Golf Cart', 
    price: 220, 
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/22/3a/47/caption.jpg?w=800&h=600&s=1'
  },
  {
    id: 5, 
    destination:'Historic Ybor City Food Walking Tour', 
    price: 98, 
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/8d/d5/4c/caption.jpg?w=800&h=600&s=1'
  },
  {
    id: 6, 
    destination:'Skip the Line: The Florida Aquarium in Tampa Bay Ticket', 
    price: 66, 
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/55/e2/fe/caption.jpg?w=800&h=600&s=1'
  },
  {
    id: 7, 
    destination:'2 Hour Guided Segway Tour', 
    price: 202, 
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5c/7d/22/caption.jpg?w=800&h=600&s=1'
  },
  {
    id: 8, 
    destination:'Tampa History Cruise', 
    price: 220, 
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/bb/82/3d/caption.jpg?w=800&h=600&s=1'
  },
  {
    id: 9, 
    destination:'St Petersburg Speed Boat Adventure', 
    price: 311, 
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/c1/d3/6f/caption.jpg?w=800&h=600&s=1'
  },
  {
    id: 10, 
    destination:'Tiki Boat - Downtown Tampa - The Only Authentic Floating Tiki', 
    price: 89, 
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/50/89/02/caption.jpg?w=800&h=600&s=1'
  },
]

const bookings: Array<Destination> = []

// BookingStore actions
function createBookings() {
  const { subscribe, set, update } = writable(bookings);

  return {
    subscribe,
    add: (booking: Destination) => update(bookings => [...bookings, booking]),
    remove: (id: number) => update(bookings => bookings.filter(booking => booking.id !== id))
  };
}

// DestinationStore actions
function getDestinationById(id: number) {
  return destinations.find(destination => destination.id === id);
}

function createDestinations() {
	const { subscribe, set, update } = writable(destinations);

	return {
		subscribe,
    byId: (id: number) => getDestinationById(id)
	};
}

export const DestinationStore = createDestinations();
export const BookingStore = createBookings();