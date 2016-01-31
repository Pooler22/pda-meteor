package Fasade;

class ClassicSingleton {
	private static ClassicSingleton instance = null;

	protected ClassicSingleton() {
		// Exists only to defeat instantiation.
	}

	public static ClassicSingleton getInstance() {
		if (instance == null) {
			instance = new ClassicSingleton();
		}
		return instance;
	}
}

class Element1 {
	private static Element1 instance = null;
	int id;

	public static Element1 getInstance() {
		if (instance == null) {
			instance = new Element1();
		}
		return instance;
	}

	public void setId(int value) {
		id = value;
	}
}

class Element2 {
	private static Element2 instance = null;
	int id;

	public static Element2 getInstance() {
		if (instance == null) {
			instance = new Element2();
		}
		return instance;
	}

	public void setId(int value) {
		id = value;
	}
}

public class TestFasade {
	
	public static boolean testFun1() {
		Element1 e1 = Element1.getInstance();
		Element2 e2 = Element2.getInstance();
		Fasade fasade = new Fasade();

		fasade.fun1();

		return ((e1.id == 0) && (e2.id == 1));
	}

	public static boolean testFun2() {
		Element1 e1 = Element1.getInstance();
		Element2 e2 = Element2.getInstance();
		Fasade fasade = new Fasade();

		fasade.fun2();

		return ((e1.id == 1) && (e2.id == 0));
	}

	public static boolean testFun3() {
		Element1 e1 = Element1.getInstance();
		Element2 e2 = Element2.getInstance();
		Fasade fasade = new Fasade();

		fasade.fun1();

		return ((e1.id == 0) && (e2.id == 0));
	}
	
	public static void main(String[] args) {
		if (TestFasade.testFun1()) {
			System.out.println("Funkcja 1 nie działa prawidłowo");
		}
		
		else if (TestFasade.testFun2()) {
			System.out.println("Funkcja 2 nie działa prawidłowo");
		}
		
		else if (TestFasade.testFun3()) {
			System.out.println("Funkcja 3 nie działa prawidłowo");
		}
		else {
			System.out.println("Gratulacje!");
		}
	}

}
