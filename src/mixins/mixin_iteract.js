export const mixiniteract = {
	methods: {
		iteractInner(regid) {
			var params = {
				id: regid,
			};
			this.$emit("iteractInner", params);
		},
	},
};
