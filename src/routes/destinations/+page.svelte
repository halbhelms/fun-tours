<script>
  import { DestinationStore } from '$lib/stores/Store'
  import DestinationLink from '$lib/components/DestinationLink.svelte'
</script>

<h1>Our Destinations</h1>
<ul>
  {#each $DestinationStore as destination}
    <a href="destinations/{destination.id}"><DestinationLink title={destination.destination} /></a>
  {/each}
</ul>

<style>
  a {
    text-decoration: none;
  }

  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }
</style>
