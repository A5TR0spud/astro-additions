const gasket = extend(LiquidTurret, "gasket"), {
	size: 2,
	health: 1000,
	range: 110,
	inaccuracy: 5,
	shootCone: 50,
	targetAir: true,
	maxAmmo: 20,
	ammoPerShot: 1,
	recoilAmount: 0,
	shootSound: none,
	ammoTypes: {
		astro-adds-noxious-gas:{
   	   		type: LiquidBulletType,
   	   		liquid: astro-adds-noxious-gas,
      		damage: 0.5,
      		lifetime: 50,
      		knockback: 0,
      		reflectable: false
		}
	},
	requirements: [
		graphite/75,
		metaglass/45
	],
	category: turret,
	research: wave
});