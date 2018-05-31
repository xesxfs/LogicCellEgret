class InputManagerClass extends eui.Component {
	public constructor() {
		super();
		this.percentWidth = 100;
		this.percentHeight = 100;
		// this.touchChildren = true;
		// this.touchEnabled = false;	
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