package kr.or.connect.reservation.dto;

public class Product {
	private Long displayInfoId;
	private Long productId;
	private String productDescription;
	private String placeName;
	private String productContent;
	private String productImageUrl;
	
	public Product() {
		super();
	}

	public Product(Long displayInfoId, Long productId, String productDescription, String placeName,
			String productContent, String productImageUrl) {
		super();
		this.displayInfoId = displayInfoId;
		this.productId = productId;
		this.productDescription = productDescription;
		this.placeName = placeName;
		this.productContent = productContent;
		this.productImageUrl = productImageUrl;
	}

	public Long getDisplayInfoId() {
		return displayInfoId;
	}

	public void setDisplayInfoId(Long displayInfoId) {
		this.displayInfoId = displayInfoId;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	public String getPlaceName() {
		return placeName;
	}

	public void setPlaceName(String placeName) {
		this.placeName = placeName;
	}

	public String getProductContent() {
		return productContent;
	}

	public void setProductContent(String productContent) {
		this.productContent = productContent;
	}

	public String getProductImageUrl() {
		return productImageUrl;
	}

	public void setProductImageUrl(String productImageUrl) {
		this.productImageUrl = productImageUrl;
	}

	@Override
	public String toString() {
		return "Product\n[\ndisplayInfoId=" + displayInfoId + ", productId=" + productId + ", productDescription="
				+ productDescription + "\n, placeName=" + placeName + "\n, productContent=" + productContent
				+ "\n, productImageUrl=" + productImageUrl + "\n]";
	}

}
