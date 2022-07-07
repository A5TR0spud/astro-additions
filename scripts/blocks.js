//constants
const noxiousGas = Liquid("noxious-gas");

//overrides
Blocks.cultivator.outputLiquid = new LiquidStack(noxiousGas, 6 / 60);
Blocks.cultivator.ignoreLiquidFullness = true;

//modded
/*const gasket = extend(LiquidTurret, "gasket", {
	drawer: DrawTurret
});

gasket.health = 420;*/