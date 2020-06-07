package kr.or.connect.reservation.service;

import java.util.List;

import kr.or.connect.reservation.dto.Product;

public interface ProductService {
	public static final long SELECT_COUNT_LIMIT = 4;

	public long getProductCount();
	public long getProductCountAtCategory(long categoryId);
	public List<Product> getProductList(long start);
	public List<Product> getProductListAtCategory(long categoryId, long start);
}
