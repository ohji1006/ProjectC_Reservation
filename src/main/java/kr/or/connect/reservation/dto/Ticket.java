package kr.or.connect.reservation.dto;

public class Ticket {
	private long price;
	private long count;

	public Ticket() {
	}

	public Ticket(long price, long count) {
		super();
		this.price = price;
		this.count = count;
	}

	public long getPrice() {
		return price;
	}

	public void setPrice(long price) {
		this.price = price;
	}

	public long getCount() {
		return count;
	}

	public void setCount(long count) {
		this.count = count;
	}

	@Override
	public String toString() {
		return "Ticket [price=" + price + ", count=" + count + "]";
	}
}
