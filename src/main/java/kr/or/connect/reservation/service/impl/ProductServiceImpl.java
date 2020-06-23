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
	public long getProductCountAtCategory(long categoryId) {
		if (categoryId == 0) {
			return poductDao.selectCount();
		}
		return poductDao.selectCountAtCategory(categoryId);
	}

	@Override
	public List<Product> getProductListAtCategory(long categoryId, long start) {
		if (categoryId == 0) {
			return poductDao.selectAll(start, SELECT_COUNT_LIMIT);
		}
		return poductDao.selectAllAtCategory(categoryId, start, SELECT_COUNT_LIMIT);
	}

}
