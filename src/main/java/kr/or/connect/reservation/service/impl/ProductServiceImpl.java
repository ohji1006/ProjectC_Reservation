package kr.or.connect.reservation.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.or.connect.reservation.dao.ProductDao;
import kr.or.connect.reservation.dto.Product;
import kr.or.connect.reservation.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductDao poductDao;

	@Override
	@Transactional
	public long getProductCount() {
		return poductDao.selectCount();
	}

	@Override
	@Transactional
	public long getProductCountAtCategory(long categoryId) {
		return poductDao.selectCountAtCategory(categoryId);
	}

	@Override
	@Transactional
	public List<Product> getProductList(long start) {
		return poductDao.selectAll(start, SELECT_COUNT_LIMIT);
	}

	@Override
	@Transactional
	public List<Product> getProductListAtCategory(long categoryId, long start) {
		return poductDao.selectAllAtCategory(categoryId, start, SELECT_COUNT_LIMIT);
	}

}
