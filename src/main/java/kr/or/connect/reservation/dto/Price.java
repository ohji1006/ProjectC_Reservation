package kr.or.connect.reservation.dto;

public class Price {

    private Long reservationInfoPriceId;
    private Long reservationInfoId;
    private Long productPriceId;
    private Long count;
	    
    public Price() {
	}

	public Price(Long reservationInfoPriceId, Long reservationInfoId, Long productPriceId, Long count) {
		super();
		this.reservationInfoPriceId = reservationInfoPriceId;
		this.reservationInfoId = reservationInfoId;
		this.productPriceId = productPriceId;
		this.count = count;
	}

	public Long getReservationInfoPriceId() {
		return reservationInfoPriceId;
	}

	public void setReservationInfoPriceId(Long reservationInfoPriceId) {
		this.reservationInfoPriceId = reservationInfoPriceId;
	}

	public Long getReservationInfoId() {
		return reservationInfoId;
	}

	public void setReservationInfoId(Long reservationInfoId) {
		this.reservationInfoId = reservationInfoId;
	}

	public Long getProductPriceId() {
		return productPriceId;
	}

	public void setProductPriceId(Long productPriceId) {
		this.productPriceId = productPriceId;
	}

	public Long getCount() {
		return count;
	}

	public void setCount(Long count) {
		this.count = count;
	}

	@Override
	public String toString() {
		return "Price [reservationInfoPriceId=" + reservationInfoPriceId + ", reservationInfoId=" + reservationInfoId
				+ ", productPriceId=" + productPriceId + ", count=" + count + "]";
	}
}
