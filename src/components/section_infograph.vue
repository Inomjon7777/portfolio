<template>
	<section class="infograph">
		<div class="container">
			<div class="infograph__content">
				<div class="infograph__map">
					<div class="infograph__map-baackitem" @click="setRepublic" v-if="activemap != 'map_republic'">
						<img src="https://bolalar-bogchasi.uz/media/store/img/arrow-right.svg" alt="icon" />
					</div>
					<div class="infograph__map-title">
						<h2>{{ currentRegion }}</h2>
					</div>

					<mapRepublic @iteract="getRegion" v-if="activemap === 'map_republic'" />
					<mapNavoi @iteractInner="getDistrict" v-if="activemap == 'map_navoi'" />
					<mapAndijan @iteractInner="getDistrict" v-if="activemap == 'map_andijan'" />
					<mapSamarqand @iteractInner="getDistrict" v-if="activemap == 'map_samarqand'" />
					<mapFergana @iteractInner="getDistrict" v-if="activemap == 'map_fergana'" />
					<mapNamangan @iteractInner="getDistrict" v-if="activemap == 'map_namangan'" />
					<mapToshvil @iteractInner="getDistrict" v-if="activemap == 'map_toshvil'" />
					<mapToshcity @iteractInner="getDistrict" v-if="activemap == 'map_toshcity'" />
					<mapJizzakh @iteractInner="getDistrict" v-if="activemap == 'map_jizzakh'" />
					<mapSirdarya @iteractInner="getDistrict" v-if="activemap == 'map_sirdarya'" />
					<mapSurxondarya @iteractInner="getDistrict" v-if="activemap == 'map_surxondarya'" />
					<mapQashqadaryo @iteractInner="getDistrict" v-if="activemap == 'map_qashqadaryo'" />
					<mapBuxoro @iteractInner="getDistrict" v-if="activemap == 'map_buxoro'" />
					<mapQQrepublic @iteractInner="getDistrict" v-if="activemap == 'map_qqrepublic'" />
					<mapKhorezm @iteractInner="getDistrict" v-if="activemap == 'map_khorezm'" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import mapRepublic from "./map_republic.vue";
import mapNavoi from "./map_navoi.vue";
import mapAndijan from "./map_andijan.vue";
import mapFergana from "./map_fergana.vue";
import mapSamarqand from "./map_samarqand.vue";
import mapNamangan from "./map_namangan.vue";
import mapToshvil from "./map_toshvil.vue";
import mapToshcity from "./map_toshcity.vue";
import mapJizzakh from "./map_jizzakh.vue";
import mapSirdarya from "./map_sirdarya.vue";
import mapSurxondarya from "./map_surxondarya.vue";
import mapQashqadaryo from "./map_qashqadaryo.vue";
import mapBuxoro from "./map_buxoro.vue";
import mapQQrepublic from "./map_qqrepublic.vue";
import mapKhorezm from "./map_khorezm.vue";

export default {
	components: {
		mapRepublic,
		mapSamarqand,
		mapNavoi,
		mapAndijan,
		mapFergana,
		mapNamangan,
		mapToshvil,
		mapToshcity,
		mapJizzakh,
		mapSirdarya,
		mapSurxondarya,
		mapQashqadaryo,
		mapBuxoro,
		mapQQrepublic,
		mapKhorezm,
	},
	data() {
		return {
			activemap: "map_republic",
			newObject: [],
			currentRegion: "Ўзбекистон Республикаси",
		};
	},
	mounted() {
		this.getData();
	},
	methods: {
		async getData() {
			fetch("../regions.json")
				.then((res) => res.json())
				.then((response) => {
					this.regionTitles = response.regionTitles;
				})
				.catch((error) => console.error("Error:", error));
		},
		getDistrict(val) {
			let activeTitle = this.regionTitles.find((item) => item.id == val.id);
			this.currentRegion = activeTitle.title;
		},
		setRepublic() {
			this.activemap = "map_republic";
			this.currentRegion = "Ўзбекистон Руспубликаси";
		},
		getRegion(val) {
			let activeTitle = this.regionTitles.find((item) => item.id == val.id);
			this.currentRegion = activeTitle.title;
			this.activemap = `map_${val.component}`;
		},
	},
};
</script>

<style>
@import "@/assets/styles/infograph.css";
</style>
