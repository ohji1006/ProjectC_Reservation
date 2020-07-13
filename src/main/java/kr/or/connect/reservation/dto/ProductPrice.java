package kr.or.connect.reservation.dto;

import java.util.Date;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import kr.or.connect.reservation.objmapper.CustomDateSerializer;

public class ProductPrice {
	private long productPriceId;
	private long productId;
	private String priceTypeName;
	private long price;
	private long discountRate;
	private Date createDate;
	private Date modifyDate;

	public ProductPrice() {
	}

	public ProductPrice(long productPriceId, long productId, String priceTypeName, long price, long discountRate,
			Date createDate, Date modifyDate) {
		super();
		this.productPriceId = productPriceId;
		this.productId = productId;
		this.priceTypeName = priceTypeName;
		this.price = price;
		this.discountRate = discountRate;
		this.createDate = createDate;
		this.modifyDate = modifyDate;
	}

	public long getProductPriceId() {
		return productPriceId;
	}

	public void setProductPriceId(long productPriceId) {
		this.productPriceId = productPriceId;
	}

	public long getProductId() {
		return productId;
	}

	public void setProductId(long productId) {
		this.productId = productId;
	}

	public String getPriceTypeName() {
		return priceTypeName;
	}

	public void setPriceTypeName(String priceTypeName) {
		this.priceTypeName = priceTypeName;
	}

	public long getPrice() {
		return price;
	}

	public void setPrice(long price) {
		this.price = price;
	}

	public long getDiscountRate() {
		return discountRate;
	}

	public void setDiscountRate(long discountRate) {
		this.discountRate = discountRate;
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

	@Override
	public String toString() {
		return "ProductPrice [productPriceId=" + productPriceId + ", productId=" + productId + ", priceTypeName="
				+ priceTypeName + ", price=" + price + ", discountRate=" + discountRate + ", createDate=" + createDate
				+ ", modifyDate=" + modifyDate + "]";
	}
}
