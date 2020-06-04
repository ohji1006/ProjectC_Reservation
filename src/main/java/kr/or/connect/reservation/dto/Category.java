package kr.or.connect.reservation.dto;

public class Category {
	private long id;
	private String name;
	private int count;

	public Category() {
		super();
	}

	public Category(long id, String name, int count) {
		super();
		this.id = id;
		this.name = name;
		this.count = count;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	@Override
	public String toString() {
		return "Category [categoryID=" + id + ", categoryName=" + name + ", categoryCount=" + count + "]";
	}

}
