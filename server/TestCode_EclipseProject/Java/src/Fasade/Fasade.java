package Fasade;

class Fasade {
	private Element1 e1;
	private Element2 e2;

	public Fasade() {
		e1 = Element1.getInstance();
		e2 = Element2.getInstance();
	}

	public void fun1() {
		e1.setId(1);
	}

	public void fun2() {
		e2.setId(1);
	}

	public void fun3() {
		e1.setId(1);
		e2.setId(1);
	}
}