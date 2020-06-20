package kr.or.connect.reservation.dto;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import kr.or.connect.reservation.objmapper.CustomDateSerializer;

public class DisplayInfo {
	private long productId;
	private long categoryId;
	private long displayInfoId;
	private String categoryName;
	private String productDescription;
	private String productContent;
	private String productEvent;
	private String placeName;
	private String placeLot;
	private String placeStreet;
	private String telephone;
	private String homepage;
	private String email;
	private Date createDate;
	private Date modifyDate;
	private String openingHours;

	public DisplayInfo() {
	}

	public DisplayInfo(long productId, long categoryId, long displayInfoId, String categoryName,
			String productDescription, String productContent, String productEvent, String placeName, String placeLot,
			String placeStreet, String telephone, String homepage, String email, Date createDate, Date modifyDate,
			String openingHours) {
		super();
		this.productId = productId;
		this.categoryId = categoryId;
		this.displayInfoId = displayInfoId;
		this.categoryName = categoryName;
		this.productDescription = productDescription;
		this.productContent = productContent;
		this.productEvent = productEvent;
		this.placeName = placeName;
		this.placeLot = placeLot;
		this.placeStreet = placeStreet;
		this.telephone = telephone;
		this.homepage = homepage;
		this.email = email;
		this.createDate = createDate;
		this.modifyDate = modifyDate;
		this.openingHours = openingHours;
	}

	public long getProductId() {
		return productId;
	}

	public void setProductId(long productId) {
		this.productId = productId;
	}

	public long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(long categoryId) {
		this.categoryId = categoryId;
	}

	public long getDisplayInfoId() {
		return displayInfoId;
	}

	public void setDisplayInfoId(long displayInfoId) {
		this.displayInfoId = displayInfoId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	public String getProductContent() {
		return productContent;
	}

	public void setProductContent(String productContent) {
		this.productContent = productContent;
	}

	public String getProductEvent() {
		return productEvent;
	}

	public void setProductEvent(String productEvent) {
		this.productEvent = productEvent;
	}

	public String getPlaceName() {
		return placeName;
	}

	public void setPlaceName(String placeName) {
		this.placeName = placeName;
	}

	public String getPlaceLot() {
		return placeLot;
	}

	public void setPlaceLot(String placeLot) {
		this.placeLot = placeLot;
	}

	public String getPlaceStreet() {
		return placeStreet;
	}

	public void setPlaceStreet(String placeStreet) {
		this.placeStreet = placeStreet;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getHomepage() {
		return homepage;
	}

	public void setHomepage(String homepage) {
		this.homepage = homepage;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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

	public String getOpeningHours() {
		return openingHours;
	}

	public void setOpeningHours(String openingHours) {
		this.openingHours = openingHours;
	}

	@Override
	public String toString() {
		return "DisplayInfo [productId=" + productId + ", categoryId=" + categoryId + ", displayInfoId=" + displayInfoId
				+ ", categoryName=" + categoryName + ", productDescription=" + productDescription + ", productContent="
				+ productContent + ", productEvent=" + productEvent + ", placeName=" + placeName + ", placeLot="
				+ placeLot + ", placeStreet=" + placeStreet + ", telephone=" + telephone + ", homepage=" + homepage
				+ ", email=" + email + ", createDate=" + createDate + ", modifyDate=" + modifyDate + ", openingHours="
				+ openingHours + "]";
	}

}
