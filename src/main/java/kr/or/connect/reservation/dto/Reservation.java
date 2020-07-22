package kr.or.connect.reservation.dto;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import kr.or.connect.reservation.objmapper.RsvDateDeserializer;
import kr.or.connect.reservation.objmapper.RsvDateSerializer;

public class Reservation {

	private long reservationInfoId;
	private long productId;
	private long displayInfoId;
	private String reservationName;
	@JsonProperty("reservationTelephone")
	private String reservationTel;
	private String reservationEmail;
	private Date reservationDate;
	@JsonProperty("cancelYn")
	private Boolean cancelFlag;
	private Date createDate;
	private Date modifyDate;
	private List<Price> prices;

	public Reservation() {
	}

	public Reservation(long reservationInfoId, long productId, long displayInfoId, String reservationName,
			String reservationTel, String reservationEmail, Date reservationDate, Boolean cancelFlag, Date createDate,
			Date modifyDate, List<Price> prices) {
		super();
		this.reservationInfoId = reservationInfoId;
		this.productId = productId;
		this.displayInfoId = displayInfoId;
		this.reservationName = reservationName;
		this.reservationTel = reservationTel;
		this.reservationEmail = reservationEmail;
		this.reservationDate = reservationDate;
		this.cancelFlag = cancelFlag;
		this.createDate = createDate;
		this.modifyDate = modifyDate;
		this.prices = prices;
	}

	public long getReservationInfoId() {
		return reservationInfoId;
	}

	public void setReservationInfoId(long reservationInfoId) {
		this.reservationInfoId = reservationInfoId;
	}

	public long getProductId() {
		return productId;
	}

	public void setProductId(long productId) {
		this.productId = productId;
	}

	public long getDisplayInfoId() {
		return displayInfoId;
	}

	public void setDisplayInfoId(long displayInfoId) {
		this.displayInfoId = displayInfoId;
	}

	public String getReservationName() {
		return reservationName;
	}

	public void setReservationName(String reservationName) {
		this.reservationName = reservationName;
	}

	public String getReservationEmail() {
		return reservationEmail;
	}

	public void setReservationEmail(String reservationEmail) {
		this.reservationEmail = reservationEmail;
	}

	@JsonGetter("reservationDate")
	@JsonSerialize(using = RsvDateSerializer.class)
	public Date getReservationDate() {
		return reservationDate;
	}

	@JsonSetter("reservationYearMonthDay")
	@JsonDeserialize(using = RsvDateDeserializer.class)
	public void setReservationDate(Date reservationDate) {
		this.reservationDate = reservationDate;
	}

	public String getReservationTel() {
		return reservationTel;
	}

	public void setReservationTel(String reservationTel) {
		this.reservationTel = reservationTel;
	}

	public Boolean getCancelFlag() {
		return cancelFlag;
	}

	public void setCancelFlag(Boolean cancelFlag) {
		this.cancelFlag = cancelFlag;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public Date getModifyDate() {
		return modifyDate;
	}

	public void setModifyDate(Date modifyDate) {
		this.modifyDate = modifyDate;
	}

	public List<Price> getPrices() {
		return prices;
	}

	public void setPrices(List<Price> prices) {
		this.prices = prices;
	}

	@Override
	public String toString() {
		return "Reservation [reservationInfoId=" + reservationInfoId + ", productId=" + productId + ", displayInfoId="
				+ displayInfoId + ", reservationName=" + reservationName + ", reservationTel=" + reservationTel
				+ ", reservationEmail=" + reservationEmail + ", reservationDate=" + reservationDate + ", cancelFlag="
				+ cancelFlag + ", createDate=" + createDate + ", modifyDate=" + modifyDate + ", prices=" + prices + "]";
	}
}
