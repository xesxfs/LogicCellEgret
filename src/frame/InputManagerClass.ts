class InputManagerClass extends egret.Sprite {
	public constructor() {
		super();
	}
	private input: Input;

	public newInput(input: Input) {
		this.removeChildren();
		this.input = input;
		if (input != null) {
			this.addChild(input);
		}
	}
}

var InputManager: InputManagerClass = new InputManagerClass();