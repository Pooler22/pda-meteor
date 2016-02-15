package sampleCoursesCode;

class Element {
	private static Element instance = null;
	int id;

	public static Element getInstance() {
		if (instance == null) {
			instance = new Element();
		}
		return instance;
	}

	public void setId(int value) {
		id = value;
	}
	
	public int getId() {
		return id;
	}
}

class ElementExt extends Element {
	private static ElementExt instance = null;

	public static ElementExt getInstance() {
		if (instance == null) {
			instance = new ElementExt();
		}
		return instance;
	}
}