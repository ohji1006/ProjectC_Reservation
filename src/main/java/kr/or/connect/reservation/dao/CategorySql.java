package kr.or.connect.reservation.dao;

public class CategorySql {
	public final static String SELECT_ALL_WITH_COUNT = "select category.id, category.name, product.count "
			+ "from category "
			+ "join "
			+ "("
			+ "select category_id, COUNT(*) as count "
			+ "from product "
			+ "group by category_id"
			+ ") as product "
			+ "on category.id = product.category_id";
}
